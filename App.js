import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert,TouchableWithoutFeedback ,Keyboard} from 'react-native';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addTodo';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);


  const DeleteTodo = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };



  const Addtodo = (text)=>{

    if(text.length > 3){
      setTodos(prevTodos =>{
        return [
          {text, key:Math.random().toString()},
          ...prevTodos
        ];
      });
    }else {
      Alert.alert('OOPS!','todos must be over 3 chars long',[{
        text:'Understood',onPress:()=>console.log('alert closed')
      }])
    }

  };

return (
  <TouchableWithoutFeedback onPress={()=>{
    Keyboard.dismiss();
  }}>
    <View style={styles.container}>
       <Header/>
       <View style={styles.content}>
         <AddTodo Addtodo={Addtodo} />
         <View style={styles.list}>
           <FlatList
              data={todos}
              renderItem={({item})=> (
                  <TodoItem item={item} DeleteTodo={DeleteTodo} />
              )}
          />
       </View>
     </View>
    </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
