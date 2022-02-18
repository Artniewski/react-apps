import Todo from "./components/Todo";

function App() {
    return (
        <div>
            <h1>My Todos</h1>
            <Todo text='Learn React' />
            <Todo text='Second Card' />
            <Todo text='Last One' />
        </div>
    );
}

export default App;
