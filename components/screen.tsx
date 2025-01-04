import { ScrollView } from 'react-native'
import React, { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function PageScreen({children}: { children: ReactNode }) {
   return <SafeAreaView style={{ backgroundColor: "#fff", height: 1000 }}>
      <ScrollView style={{ padding: 15 }}>
         {children}
      </ScrollView>
   </SafeAreaView>
}