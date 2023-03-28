import { useEffect, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native' ;

const Clock = () => {
    

    const [time, setTime] = useState(new Date().toLocaleTimeString()) ;

    const start_time = () => {
        setTime(new Date().toLocaleTimeString());
    }

    useEffect( () => {
        const interval = setInterval (start_time, 1000) ;

        return () => clearInterval(interval) ; // usuwał interwał i zatrzymuje wykonywanie funkcji zdefiniowanej wew. setInterval()
        // to jest ważne, aby aplikacja była optymalna i ni prowadziła do wycieków pamięci
    }, [])

    return <View>
        <Text> text clock</Text>
        <Text style={{fontSize: 60, fontWeight: 'bold' }}> {time} </Text>
    </View>
}

export default Clock ;

const styles = StyleSheet.create({

}) 
