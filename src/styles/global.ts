import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:`#fff`,
        padding:10,
    },
    tittle:{
        fontSize:24,
        fontWeight:`bold`,
        marginVertical:10,
        textAlign:`center`,
    },
    //Login
    LoginContainer: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "gray"
    },
    LoginCard: {
        width: '90%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    LoginTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    LoginInputs: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '80%',
        borderRadius: 5,
    },
    LoginButton: {
        marginTop: 2,
        padding: 15,
        backgroundColor: '#000000',
        color: '#fff',
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    LoginImg: {
        width: 130,
        height: 130,
        marginBottom: 20
    },
    LoginRegisterText: {
        marginTop: 20,
        textAlign: 'center',
        color: '#0066cc',
        textDecorationLine: 'underline'
    },
    //Home


    HomeTitle: {
        fontSize: 50,
        backgroundColor: "rgba(225, 225, 225, 0.5)",
        fontWeight: 'bold',
        marginBottom: 20,
        position: 'absolute',
        width: '90%',
        color: "white",
        zIndex: 1,
        padding: 25,
        borderRadius: 5,


    },
    HomeContainer: {

        justifyContent: 'center',
        alignItems: 'center',
    },
    HomeImg: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },

    //AnimeCard
    AnimeCard: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#e1e1e1',
        borderRadius: 10
    },
    AnimeImg: {
        width: '100%',
        height: 200,
        borderRadius: 10
    },
    AnimeTitle: {
        fontSize: 18,
        fontWeight: 'bold', // Texto en negrita
        marginTop: 5
    },
    //Details



    DetailsContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      DetailsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color:"#8a4d1b"
      },
      DetailsDecription: {
        fontSize:  18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      DetailsSecondContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      DetailsSecondTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color:"#858588"
      },
      

})