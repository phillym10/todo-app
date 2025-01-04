import PageScreen from "@/components/screen";
import Todo from "@/components/todo";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
	const [showAddTodo, setShowAddTodo] = useState(false)
	const [todo, setTodo] = useState('')
	const [todos, setTodos] = useState([] as string[])

	const addTodo = () => setShowAddTodo(true);
	const cancelAddTodo = () => setShowAddTodo(false);
	const createTodo = () => {
		setTodos((prev) => [todo, ...prev]);
		setShowAddTodo(false)
		setTodo('')
	}

	return (
		<PageScreen>
			<Text style={{fontSize:40}}>Todo App</Text>

			{(showAddTodo) ? (<>
				<View style={{ padding: 10, paddingLeft: 0, paddingTop: 35 }}>
					<Text style={{ fontSize:20, paddingBottom: 10 }}>What do you want to do today ?</Text>
					<TextInput style={{
						borderColor: "#ededed",
						borderWidth: 1,
						padding: 10,
						borderRadius: 5,
						color: "#000",
						fontFamily: "InterTight",
						fontSize: 16,
					}} value={todo} onChangeText={(text: string) => setTodo(text)}  />

					<View style={{paddingTop: 30}}>
						<TouchableOpacity onPress={createTodo}>
							<View style={{
								padding: 10,
								backgroundColor: "#000",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								borderRadius: 10
							}}>
								<Text style={{fontSize:16,color:"#fff"}}>Add</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={{paddingTop: 10}}>
						<TouchableOpacity onPress={cancelAddTodo}>
							<View style={{
								padding: 10,
								backgroundColor: "#fff",
								borderColor: "#000",
								borderWidth: 1,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								borderRadius: 10
							}}>
								<Text style={{fontSize:16,color:"#000"}}>Cancel</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</>) : (<>

				{(todos.length > 0) ? (<>
					<View style={{ padding: 10, paddingLeft: 0, paddingTop: 25 }}>
						<TouchableOpacity onPress={addTodo} style={{width: 120}}>
							<View style={{
								padding: 10,
								backgroundColor: "#000",
								width: 120,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								borderRadius: 10
							}}>
								<Text style={{fontSize:16,color:"#fff"}}>+ Add Todo</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={{ paddingTop: 30, paddingLeft: 5, paddingBottom: 10 }}>
						<Text style={{ fontSize: 20 }}>{todos.length} todos</Text>
					</View>
					<View>
						{todos.map((todo, index) => <Todo key={index}>{todo}</Todo>)}
					</View>
				</>) : (<>
					<View style={{ paddingTop: 30, paddingLeft: 5, paddingBottom: 10 }}>
						<Text style={{ fontSize: 20 }}>You have nothing on your todo list</Text>
					</View>
					<View style={{ padding: 10, paddingLeft: 0, paddingTop: 5 }}>
						<TouchableOpacity onPress={addTodo}>
							<View style={{
								padding: 10,
								backgroundColor: "#000",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								borderRadius: 10
							}}>
								<Text style={{fontSize:16,color:"#fff"}}>+ Add Todo</Text>
							</View>
						</TouchableOpacity>
					</View>
				</>)}
			</>)}

		</PageScreen>
	);
}
