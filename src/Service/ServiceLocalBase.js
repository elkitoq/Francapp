import LocalBase from 'localbase'
import moment from 'moment'

//create new data base
let db = new LocalBase('db')

// function create collection and add work in the data base
export async function addWorkOrdertoDb(work) {
    let id = makeid();
    let checkid = await checkById(id);
    while (checkid === true) {
        id = makeid();
        checkid = await checkById(id)
    }
    await db.collection('workorder').add({
        id: id,
        name: work.name,
        email: work.email,
        numberCel: work.numberCel,
        equipo: work.equipo,
        date: moment().format('LL'),
        deliveryDate: work.fechaEntrega,
        problemaEquipo: work.problemaEquipo,
        state: 1
    })
}

//function create id
function makeid() {
    let length = 5
    var result = [];
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}

//search id in the data base
async function checkById(id) {

    let result = await db.collection('workorder').doc({ id: id }).get()

    if (typeof (result) === 'object') {
        return true
    }
    else {
        return false
    }
}

//Get collection the workOrders
export async function getListWorks(state) {
    try {
        let listWork = await db.collection('workorder').orderBy('date').get()
        let works = listWork.filter(work => work.state === state)
        return works
    }
    catch (error) {
        console.log('error: ', error)
    }
}

//Update a document
export async function updateWork(id, newState) {
    await db.collection('workorder').doc({ id: id }).update({
        state: newState
    })
}

//search document whit searchbar
export async function searchDocument(id) {
    try {
        let searchDocByID = await db.collection('workorder').doc({ id: id }).get()

        if (searchDocByID === undefined) {
            return `No se encontro ningun equipo con ese ID`
        }

        return searchDocByID

    } catch (error) {
        console.log('error: ', error)
    }
}

// get list works for calendar
export async function getListJobs() {
    try {
        let listJobs = await db.collection('workorder').orderBy('date').get()
        let jobs = []
        listJobs.map(work => {
            if (work.state === 1) {
                let workDate = {
                    id: work.id,
                    color: '#f9b208',
                    from: work.deliveryDate,
                    to: work.deliveryDate,
                    title: `${work.name} ${work.equipo}`
                }

                jobs.push(workDate)
            } else if (work.state === 2) {
                let workDate = {
                    id: work.id,
                    color: '#1ccb9e',
                    from: work.deliveryDate,
                    to: work.deliveryDate,
                    title: `${work.name} ${work.equipo}`
                }

                jobs.push(workDate)
            } else {
                let workDate = {
                    id: work.id,
                    color: '#9ede73',
                    from: work.deliveryDate,
                    to: work.deliveryDate,
                    title: `${work.name} ${work.equipo}`
                }
                jobs.push(workDate)
            }

        })

        return jobs
    }
    catch (error) {
        console.log('error: ', error)
    }
}