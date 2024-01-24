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

                    <Card title="Adam Bark's Django React Template with authentication">
                        <ul className="list-disc pl-6">
                            <li>Run pip install -r requirements.txt in the backend folder.</li>
                            <li>Python manage.py migrate</li>
                            <li>Python manage.py createsuperuser</li>
                            <li>Python manage.py runserver 0.0.0.0:8000 (include address for codeanywhere)</li>
                            <li>Run npm install in the frontend folder.</li>
                        </ul>
                    </Card>
                </div>
            </Container>
        </>
    )
}

export default HomeScreen
