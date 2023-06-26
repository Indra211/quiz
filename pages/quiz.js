import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text,TouchableOpacity} from "react-native";

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const Quiz = ({ navigation }) => {
    const [questions,setQuestions] = useState();
    const [ques , setQues] = useState(0);
    const [options , setOptions] = useState([])
    const [score, setScore] = useState(0)
    const getQuiz=async()=>{
        const url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple&encode=url3986';
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results);
        setOptions(generateAndShuffle(data.results[0]));
    };
    useEffect(()=>{
        getQuiz()
    },[])
    const handlerNext = ()=>{
        setQues(ques+1);
        setOptions(generateAndShuffle(questions[ques+1]));
    }
    const handlerPrev = () => {
        setQues(ques - 1);
        setOptions(generateAndShuffle(questions[ques - 1]));
    }
    const generateAndShuffle=(_question)=>{
        const options = [..._question.incorrect_answers]
        options.push(_question.correct_answer);
        shuffleArray(options);
        return options
    }
    const optionSelection = (_options)=>{
        if(_options==questions[ques].correct_answer){
            setScore(score+10)
        }
       if(ques!==9) {setQues(ques+1);
        setOptions(generateAndShuffle(questions[ques+1]))};
    }
    return (
        <View style={styles.container}>
        {questions && (
        <View style={{flex:1}}> 
            <View style={styles.top}>
                <Text style={{fontSize: 20,fontWeight: '600'}}>
                    Q. {decodeURIComponent(questions[ques].question)}
                </Text>
            </View>
            <View style={styles.options}>
                        <TouchableOpacity style={styles.optionButton} onPress={() => optionSelection(options[0])}>
                            <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
                </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton} onPress={() => optionSelection(options[1])}>
                            <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
                </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton} onPress={() => optionSelection(options[2])}>
                            <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
                </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton} onPress={() => optionSelection(options[3])}>
                            <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                        {ques !== 9 && <TouchableOpacity style={styles.button} onPress={handlerNext}>
                            <Text>SKIP</Text>
                        </TouchableOpacity>}
                        {ques == 9 && <TouchableOpacity onPress={() => navigation.navigate("Result",{
                            score:score
                        })} style={styles.button}>
                            <Text>
                                SHOW RESULTS
                            </Text>
                        </TouchableOpacity>}
            </View>
            </View>
        )}
        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
    container:{
        height:'100%',
        paddingTop:40,
        paddingHorizontal:20

    },
    top:{
        marginVertical:16,
    },
    options:{
        marginVertical:16,
        flex:1,
    },
    footer:{
        marginBottom:20,
        flexDirection:'row',
        alignSelf:'center'
    },
    button: {
            height:'35%',
            width: '60%',
            borderWidth: 1,
            borderColor: '#852963',
            marginTop: 50,
            borderRadius: 50,
            backgroundColor: '#1A759F',
            justifyContent: 'center',
            alignItems: 'center',
        },
        option:{
            fontSize:18
        },
        optionButton:{
            paddingVertical:12,
            marginVertical:6,
            backgroundColor:'#987',
            paddingHorizontal:12,
            borderRadius:10
        }
    }
)