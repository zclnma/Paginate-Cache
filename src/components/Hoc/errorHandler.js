import React, { Component } from 'react';

import style from './errorHandler.module.scss';

const errorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {
        state = {
            open: false,
            error: null
        }

        componentWillMount () {
            this.reqInterceptor = axios.interceptors.request.use( req => {
                this.setState( { error: null } );
                return req;
            } );
            this.resInterceptor = axios.interceptors.response.use( res => res, error => {
                this.setState( { open: true, error: error.message } );
            } );
        }

        componentWillUnmount () {
            axios.interceptors.request.eject( this.reqInterceptor );
            axios.interceptors.response.eject( this.resInterceptor );
        }

        errorConfirmedHandler = () => {
            this.setState( { error: null } );
        }

        modalCloseHandler = () => {
            this.setState({ open: false, error: null });
          };

        render () {
            return (
                <>
                    {this.state.error ? 
                        <div className={style.error}>{this.state.error}</div> : null}
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    }
}

export default errorHandler;