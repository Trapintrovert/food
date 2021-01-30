import axios from 'axios'

export default axios.create({
    baseUrl: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer h959N7v3q7ejMaEi-RtR5DRivaN8A1pVpjMygjK12GOnsSsweSPKSN9TWZJl76tHf6yxrYMqMCfU8FlgDjb-6KzBkipxF1tWeY7j_PfbFLhP-tQmuxA4DkDN08cUYHYx'
    }
})