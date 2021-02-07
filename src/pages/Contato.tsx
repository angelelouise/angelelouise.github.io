import React from "react";
import '../style/contato.css'
import '../style/global.css'
import{ init} from 'emailjs-com';
import emailjs from 'emailjs-com';

class Contato extends React.Component<any, any>{
    constructor(props : any) {
        super(props);

        this.state = {
            assunto: '',
            corpo:'',
            email:'',
            erroAssunto: false,
            erroCorpo: false,
            erroEmail: false,
            exibeErro: false,
            userId: 'user_J1VjmhsS6rjqCmH4joa7W',
            serviceId: 'service_dqvw0qr',
            templateId: 'template_5xlw3lp'
        };
        init(this.state.userId);
    }

    handleChangeAssunto = (event: { target: { value: string | any[]; }; })=>{

        if(!(event.target.value.length===0)){//se o campo não estiver vazio
            this.setState({
                assunto:event.target.value,
                erroAssunto:false
            });
        }else{
            this.setState({
                erroAssunto:true
            });
        }
    }
    handleChangeCorpo = (event: { target: { value: string | any[]; }; })=>{

        //altera a altura do componente de texto de acordo com seu conteúdo
        const target = event.target as HTMLTextAreaElement;
        target.style.height = "60px";
        target.style.height = `${target.scrollHeight}px`;

        if(!(event.target.value.length===0)){//se o campo não estiver vazio
            this.setState({
                corpo:event.target.value,
                erroCorpo:false
            });
        }else{
            this.setState({
                erroCorpo:true
            });
        }
    }
    handleChangeEmail = (event: { target: { value: string | any[]; }; })=>{
        if(!(event.target.value.length===0)){//se o campo não estiver vazio
            this.setState({
                email:event.target.value,
                erroEmail:false
            });
        }else{
            this.setState({
                erroEmail:true
            });
        }
    }
    sendFeedback (templateId: any, variables: { message_html: any; from_name: any; reply_to: any; }) {
        emailjs.send(
            this.state.serviceId, templateId,
            variables
        ).then((res: any) => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch((err: any) => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
    handleSubmit = (event: { preventDefault: () => void; })=>{
        event.preventDefault()
        if(this.state.erroAssunto || this.state.erroCorpo || this.state.erroEmail){
            //exibir uma mensagem de erro
            this.setState({
                exibeErro:true
            })
        }else{
            ;
            this.setState({
                exibeErro:false
            })
            this.sendFeedback(this.state.templateId, {message_html: this.state.corpo, from_name: this.state.assunto, reply_to: this.state.email})
        }


    }
    render(){
        return(
            <div id="contato-page-landing">
                <div id="contato-page-content">
                    <div id="contato-content-wrapper">
                        <form onSubmit={this.handleSubmit}>
                            <h1>Entre em contato</h1>
                            {this.state.exibeErro ? <span style={{color: "red"}}>Por favor, preencher os campos.</span>: ''}
                            <h2>Assunto:</h2>
                            <input id="input_titulo_email" className="input" name="assunto" onChange={this.handleChangeAssunto}/>
                            {this.state.erroAssunto ? <span style={{color: "red"}}>Por favor, preencher o campo.</span>: ''}
                            <h2>E-mail:</h2>
                            <input id="input_email" className="input" name="email" onChange={this.handleChangeEmail}/>
                            {this.state.erroEmail ? <span style={{color: "red"}}>Por favor, preencher o campo.</span>: ''}
                            <h2>Mensagem:</h2>
                            <textarea id="input_corpo_email" className="auto_height" name="corpo" onChange={this.handleChangeCorpo}/>
                            {this.state.erroCorpo ? <span style={{color: "red"}}>Por favor, preencher o campo.</span>: ''}
                            <br/>
                            <br/>
                            <button className="button" id="input_submit_email" type="submit"> Enviar</button>

                        </form>
                    </div>
                    <div id="contato-box"/>
                </div>
            </div>
        );
    }

}

export default Contato;