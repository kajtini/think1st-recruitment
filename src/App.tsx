import MarathonForm from "./components/MarathonForm";

function App() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gradient-start  via-gradient-middle to-gradient-end font-primary text-very-dark-blue">
            <div className="flex-grow items-center justify-center flex flex-col px-6 py-12 w-full">
                <MarathonForm />
            </div>
        </div>
    );
}

export default App;
