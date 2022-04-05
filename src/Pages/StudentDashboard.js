import 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import Layout from '../Components/Layout'
import studsidebaritems from '../studsidebaritems'
import Side from '../Components/Side'
import '../Styles/Sidebar.css'

// SM: If you are not using this commented out code,
//     it would probably be best to get rid of it to keep the file cleaner
function StudentDashboard() {
    // const [projects, setProjects] = useState([])
    // const projectsCollectionRef = collection(db, 'projects')
    // useEffect(() => {
    //     const getProjects = async () => {
    //         const data = await getDocs(projectsCollectionRef)
    //         //loop through documents in collection
    //         console.log(data)
    //         setProjects(
    //             data.docs.map((doc) => ({ ...doc.data(), key: doc.id }))
    //         )
    //     }
    //     getProjects()
    // }, [])

    return (
        <Layout>
            <Side sidebaritems={studsidebaritems}>
                <div>
                    <h1
                        id="dash-title"
                        style={{
                            color: 'rgba(16, 127, 183, 1)',
                            textAlign: 'center',
                            fontSize: '50px',
                            fontWeight: 'lighter',
                            paddingTop: '20rem',
                        }}
                    >
                        {' '}
                        <b> Jake </b>, welcome to your dashboard{' '}
                    </h1>
                </div>
            </Side>
        </Layout>
    )
}

export default StudentDashboard