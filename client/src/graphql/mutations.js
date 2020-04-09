import gql from 'graphql-tag';

export const SIGNUP_USER = gql`
    mutation Signup($username: String!, $password: String!) {
        signup(username: $username, password: $password) {
            _id
            username
            token
            loggedIn
            masteryPoints
        }
    }
`

export const LOGIN_USER = gql`
    mutation Login($username: String!, $password: String!){
        login(username: $username, password: $password){
            _id
            username
            token
            loggedIn
            masteryPoints
        }
    }
`

export const UPDATE_POINT = gql`
    mutation UpdatePoint($point: Int) {
        updatePoint(point: $point) {
            _id
            username
            masteryPoints
        }
    } 
`

export const RESET_POINT = gql`
    mutation ResetPoint($point: Int) {
        resetPoint(point: $point) {
            _id
            username
            masteryPoints
        }
    } 
`