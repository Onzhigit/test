export const IdSelector = (data, role) => {
    let array = data.results.filter(obs => obs.title === role).map(obs => obs.id)
    return {roleID: array[0]}
}

