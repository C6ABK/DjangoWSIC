import Container from '../components/Container'
import Card from '../components/Card'

function HomeScreen() {
    return (
        <>
            <Container>
                <div className="space-y-16 mt-10">
                    <div className="rounded-lg text-center relative">
                        <div className="rounded-full inline-flex flex-col items-center text-blue-700 select-none justify-center bg-white w-80 h-80 sm:w-96 sm:h-96 text-6xl font-bold my-auto drop-shadow-2xl">
                            <div>Django</div>
                            <div>React</div>
                            <div>Template</div>
                        </div>
                    </div>

                    <Card title="Adam Bark's Django-React Template">
                        <p>
                            Django React template with authentication. Run pip install -r requirements.txt in the backend folder and npm install in the frontend folder to begin.
                        </p>
                        <p>Create super user.</p>
                    </Card>
                </div>
            </Container>
        </>
    )
}

export default HomeScreen
