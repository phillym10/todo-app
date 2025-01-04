import { View, Text, TouchableOpacity } from 'react-native'
import React, { ReactNode, useState } from 'react'

export default function Todo({ children }: { children: ReactNode }) {
   const [checked, setChecked] = useState(false)
   
   const toggleCheck = () => setChecked((prev) => !prev);

   return (
      <TouchableOpacity onPress={toggleCheck}>
         <View style={{
            borderColor: "#ededed",
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 2,
            marginBottom: 2,
         }}>
            <View style={{ padding: 8, display: "flex", alignItems: "center", flexDirection: "row", gap: "10" }}>
               {(checked) ? (<Text style={{ width: 20 }}>✅</Text>) : <></>}
               <Text style={{ fontSize: 18, fontWeight: 300 }}>{children}</Text>
            </View>
         </View>
      </TouchableOpacity>
   )
}