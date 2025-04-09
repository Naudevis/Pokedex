import React, { useEffect, useState } from 'react';
import { Anime } from '../types/anime';
import api from '../apis/animeApi';
import AnimeCard from '../components/AnimeCard';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import global from '../styles/global';

const AnimeScreen = () => {
    const [animes, setAnime] = useState<Anime[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [animesPerPage] = useState(10);
    const [activeSearchQuery, setActiveSearchQuery] = useState('');

    useEffect(() => {
        fetchAnimes();
    }, [currentPage, activeSearchQuery]); // Depende de activeSearchQuery

    const fetchAnimes = async () => {
        setLoading(true);
        setError(null);
        try {
            let response;
            if (activeSearchQuery.trim() !== '') {
                response = await api.get('/anime', {
                    params: {
                        q: activeSearchQuery,
                        page: currentPage,
                        limit: animesPerPage,
                    },
                });
            } else {
                response = await api.get('/anime', {
                    params: {
                        page: currentPage,
                        limit: animesPerPage,
                    },
                });
            }

            setAnime(response.data.data);
            setTotalItems(response.data.pagination?.items?.total || 0);
        } catch (error) {
            console.error('Fail to charge anime', error);
            setError('Fail to charge anime. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        setCurrentPage(1); // Resetear a la primera página
        setActiveSearchQuery(searchQuery); // Establecer la búsqueda activa
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        setActiveSearchQuery(''); // Limpiar búsqueda activa
        setCurrentPage(1);
    };

    const totalPages = Math.ceil(totalItems / animesPerPage);

    if (loading && currentPage === 1) {
        return (
            <View style={[global.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#000" />
                <Text>Cargando...</Text>
            </View>
        );
    }

    return (
        <View style={global.container}>
            <Text style={global.tittle}>Animes</Text>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search anime..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    onSubmitEditing={handleSearch}
                    returnKeyType="search"
                />
                {activeSearchQuery ? (
                    <TouchableOpacity 
                        style={styles.clearButton} 
                        onPress={handleClearSearch}
                    >
                        <Text style={styles.searchButtonText}>X</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity 
                        style={styles.searchButton} 
                        onPress={handleSearch}
                        disabled={loading || searchQuery.trim() === ''}
                    >
                        <Text style={styles.searchButtonText}>Search</Text>
                    </TouchableOpacity>
                )}
            </View>

            {error && (
                <Text style={styles.error}>{error}</Text>
            )}

            <ScrollView>
                {animes.length > 0 ? (
                    animes.map((a) => (
                        <AnimeCard key={a.mal_id} anime={a} navigation={navigation} />
                    ))
                ) : (
                    !loading && <Text style={styles.noResults}>
                        {activeSearchQuery ? "No results found" : "There are no animes available"}
                    </Text>
                )}
            </ScrollView>

            {totalPages > 1 && (
                <View style={styles.pagination}>
                    <TouchableOpacity
                        onPress={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        style={[
                            styles.button,
                            currentPage === 1 && styles.disabledButton
                        ]}
                    >
                        <Text style={styles.buttonText}>Previous</Text>
                    </TouchableOpacity>
                    <Text>{`Page ${currentPage} to ${totalPages}`}</Text>
                    <TouchableOpacity
                        onPress={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        style={[
                            styles.button,
                            currentPage === totalPages && styles.disabledButton
                        ]}
                    >
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

// Los estilos se mantienen igual que en la versión anterior
const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
        marginRight: 10,
    },
    searchButton: {
        padding: 10,
        backgroundColor: '#000000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 80,
    },
    clearButton: {
        padding: 10,
        backgroundColor: '#ff4444',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 40,
    },
    searchButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
        width: '100%',
    },
    button: {
        padding: 15,
        backgroundColor: '#000000',
        borderRadius: 10,
        width: '30%',
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: '#cccccc',
    },
    buttonText: {
        color: '#fff',
    },
    noResults: {
        textAlign: 'center', 
        marginTop: 20,
        color: '#666',
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginVertical: 10,
    },
});

export default AnimeScreen;