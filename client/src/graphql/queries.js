import gql from "graphql-tag";

export const FETCH_CATEGORIES = gql`
    query Categories {
        categories {
            _id
            name
        }
    }
`

export const FETCH_CATEGORY = gql`
    query Category {
        category {
            _id
            name
            questions {
                _id
                title
                answer {
                    _id
                    title
                }
                options {
                    _id
                    title
                }
            }
        }
    }
`

export const FETCH_ALL_QUESTIONS = gql`
    query AllQuestions {
        allQuestions {
            _id
            title
            category {
                _id
                name
            }
            answer {
                _id
                title
            }
            options {
                _id
                title
            }
        }
    }
`

export const CURRENT_USER = gql`
    query CurrentUser {
        me {
            _id
            username
            masteryPoints
        }
    }
`;

export const IS_LOGGED_IN = gql`
    query IsLoggedIn {
        isLoggedIn @client
    }
`