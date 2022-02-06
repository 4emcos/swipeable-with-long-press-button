import React, {useState} from "react";
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import ListItem, { Separator } from "./Components/ListItem";

export default function App() {
  const [list, setList] = useState([
    { text: "Learn React Native", key: 1 },
    { text: "Learn Swift", key: 2 },
    { text: "Learn Java", key: 3 },
    { text: "Learn Python", key: 4 },
    { text: "Learn C++", key: 5 },
    { text: "Learn C#", key: 6 },
    { text: "Learn Go", key: 7 },
    { text: "Learn JavaScript", key: 8 },
    { text: "Learn PHP", key: 9 },
    { text: "Learn Ruby", key: 10 },
  ]);

  const onSwipeFromLeft = (key) => {
    setList(prev => {
      return prev.filter(item => item.key !== key);
    });
    alert('Add to learn!')
  };

  const onSwipeFromRight = (key) => {
    setList(prev => {
      return prev.filter(item => item.key !== key);
    });
    alert('Deleted!')
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => 
        <ListItem
          {...item}
          onSwipeFromLeft={() => onSwipeFromLeft(item.key)}
          onSwipeFromRight={() => onSwipeFromRight(item.key)}
        />}
        ItemSeparatorComponent={() => <Separator />}

      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
