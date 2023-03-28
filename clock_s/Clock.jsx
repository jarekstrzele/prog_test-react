import { useEffect, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native' ;

const Clock = () => {


    const [time, setTime] = useState(new Date().toLocaleTimeString()) ;

    useEffect( () => {
        const interval = setInterval ( () => {
            setTime(new Date().toLocaleTimeString());
        }, 1000) ;

        return () => clearInterval(interval) ; 
    }, [])

    return <View>
        <Text> text clock</Text>
        <Text style={{fontSize: 60, fontWeight: 'bold' }}> {time} </Text>
    </View>
}

export default Clock ;

const styles = StyleSheet.create({

}) 
