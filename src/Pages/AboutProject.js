import React, { useState, useEffect } from 'react'
import '../Styles/LearnMore.css'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Link } from 'react-router-dom'
//import Button from '@mui/material/Button'

import Layout from '../Components/Layout'
//import { Icon } from '@mui/material'

function AboutProject({ match, projects }) {
    const [project, setProject] = useState({})
    const id = match.params.projectId

    useEffect(() => {
        //send the network request to retrieve data for this project
        const selected = projects.filter((project) => project.key === id)[0]
        setProject(selected)
    }, [id, projects])

    return (
        <Layout>
            <div>
                <div style={{ margin: '20px' }}>
                    <Link to="/projectspage">
                        <ArrowBackIosIcon></ArrowBackIosIcon>
                    </Link>
                </div>
                {project && (
                    <div className="about-container">
                        <div className="column-left">
                            {' '}
                            <img
                                src={`${process.env.PUBLIC_URL}/projectImages/${project.image}`}
                                alt="project.title"
                            />{' '}
                        </div>
                        <div className="column-right">
                            <div style={{ fontSize: '50px' }}>
                                {project.title}
                            </div>

                            <div
                                style={{ fontSize: '15px', maxWidth: '600px' }}
                            >
                                {project.description}
                            </div>
                        </div>
                    </div>
                )}

                <div className="action-items">
                    <HighlightOffIcon></HighlightOffIcon>
                    <FavoriteIcon> </FavoriteIcon>
                    <BookmarkBorderIcon></BookmarkBorderIcon>
                </div>
            </div>
        </Layout>
    )
}

export default AboutProject
