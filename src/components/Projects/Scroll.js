import React, {useState, useCallback, useEffect} from 'react'
import Project from "./project"
import InfiniteScroll from 'react-infinite-scroll-component'
import LoadingProject from './LoadingProject'


const Scroll = ({projects}) => {
    useEffect(() => {
        if(projects){
            setAllProjects(projects?.slice(0, perPage))
        }
    }, [projects, allProjects])

    const perPage = 3
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const [lastPosition, setLastPosition] = useState(perPage)
    const [allProjects, setAllProjects] = useState(projects?.slice(0, perPage))
    const [projectIndex, setProjectIndex] = useState(0)
    const loadNext = useCallback(() => {

        setTimeout(() => {
            setAllProjects((prev) => [...prev, ...projects?.slice(lastPosition, lastPosition + perPage)])
        }, 3000)
        setLastPosition(lastPosition + perPage)
        setProjectIndex(projectIndex + perPage)
        if(lastPosition > allProjects.length){
            setHasMore(false)
        }
    })


    return (
        <>
            <InfiniteScroll
                dataLength={allProjects.length}
                next={loadNext}
                hasMore={hasMore}
                loader={<LoadingProject />}
            >
                {allProjects?.map((project, index) => {
                    return (
                        <Project key={project.order} project={project} />
                    )
                })}
            </InfiniteScroll>
        </>
    )
}

export default Scroll
