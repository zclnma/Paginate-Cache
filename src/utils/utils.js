export const axiosTickets = (currenPage, number) => {
    const paramString = '/tickets?ticketType=incident&sortDirection=DESC&perPage=12&page='
    const params = [
        `${paramString}0`,
        `${paramString}1`,
        `${paramString}2`,
        `${paramString}3`
    ]
    //let responses  = params.map(param => call(axios, param)) 
}

export const pageTransformer = (page) => {
    const newPage = page.map(ticket => {
        //console.log(ticket);
        Object.keys(ticket.serviceData).forEach(service => (
            !ticket.serviceData[service] && ticket.serviceData[service] !== undefined) && delete ticket.serviceData[service]
        );
        return {
            coreData: ticket.coreData,
            serviceData: ticket.serviceData
        }
    })

    return newPage;
}