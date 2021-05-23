import Calendar from 'react-awesome-calendar';
import '../assets/css/calendar.css'
import { useState, useEffect } from 'react'
import { getListJobs } from '../Service/ServiceLocalBase.js'


export const Calendario = () => {

    const [dateJobs, setDateJobs] = useState([]);

    useEffect(async () => {
        let jobs = await getListJobs();

        setDateJobs(jobs)
    }, [])

    return (
        <Calendar className="calendario"
            events={dateJobs}
        />
    );
}