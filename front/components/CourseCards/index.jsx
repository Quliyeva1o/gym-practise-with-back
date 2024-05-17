import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useContext } from 'react';
import CoursesContext from '../../src/contexts/cardsContext';


const CourseCards = () => {
    const { courses, setCourses } = useContext(CoursesContext)
    console.log(courses);
    return (

        <>
            <Typography variant='h5'>Top Courses That are open for Students</Typography>
            <Typography variant='h6'>Who are in extremely love with eco friendly system.</Typography>

            {
                courses.map((course) => {
                    return (
                        <> <Box>

                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={course.imgSrc}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Box>
                        </>
                    )
                })
            }</>
    )
}

export default CourseCards
