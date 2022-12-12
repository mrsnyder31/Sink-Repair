const applicationState = {
    requests: [],
    plumbers: [],
    completions: []

}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
    .then(response => response.json())
    .then(
        (serviceRequests) => {
            // Store the external state in application state
            applicationState.requests = serviceRequests
        }
        )
}
    
    
    export const getRequests = () => {
        return applicationState.requests.map(r => ({...r}))
    }



    export const sendRequest = (userServiceRequest) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userServiceRequest)
        }
    
    
        return fetch(`${API}/requests`, fetchOptions)
            .then(response => response.json())
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
    }

    export const deleteRequest = (id) => {
        return fetch(`${API}/requests/${id}`, { method: "DELETE" })
            .then(
                () => {
                    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                }
            )
    }
    
    
    export const fetchPlumbers = () => {
        return fetch(`${API}/plumbers`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.plumbers = data
                }
                )
            }
    
    export const getPlumbers = () => {
        return applicationState.plumbers.map(p => ({...p}))
    }

    export const sendPlumbers = (userServicePlumbers) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userServicePlumbers)
        }
    
    
        return fetch(`${API}/requests`, fetchOptions)
            .then(response => response.json())
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
    }
    
            
    export const fetchCompletions = () => {
        return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.completions = data
            }
            )
    }
    export const getCompletions = () => {
        return applicationState.completions.map(c => ({...c}))
    }

    export const sendCompletions = (userServiceCompletions) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userServiceCompletions)
        }
    
    
        return fetch(`${API}/completions`, fetchOptions)
            .then(response => response.json())
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
    }