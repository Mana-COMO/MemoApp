import {View, StyleSheet, Text} from 'react-native'
import {string} from 'prop-types'
function Hello(props){
    const {children}=props;
    return (
        <View>
            <Text style={styles.text}>Hello World!!{children}</Text>
        </View>
    );
}

Hello.propTypes={
    children:string.isRequired,
}
const styles =StyleSheet.create({
text:{
    color:'#ffffff',
    backgroundColor:'blue',
    fontSize:40,
    fontWeight:'bold',
    padding:16
}
})
export default Hello;


