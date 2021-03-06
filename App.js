import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle }
    ])
  }
  // const test = params => {
  //   console.log('test' + ' ' + params)
  // }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} /* onTest={test} */ />
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})
