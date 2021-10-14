import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import * as S from './styles';
import { format } from 'date-fns';

import api from '../../services/api';

//Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

import iconCalendar from '../../assets/calendar.png'
import iconClock from '../../assets/clock.png'

function Task({match}) {
    const [redirect, setRedirect] = useState(false);
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date , setDate] = useState();
    const [hour , setHour] = useState();
    const [macaddress , setMacaddress] = useState('11:11:11:11:11:11');

  async function LoadTaskDetails(){
    await api.get(`/task/${match.params.id}`)
      .then(response => {
        setType(response.data.type)
        setDone(response.data.done)
        setTitle(response.data.title)
        setDescription(response.data.description)
        setDate(format(new Date (response.data.when),'yyyy-MM-dd'))
        setHour(format(new Date (response.data.when),'HH:mm'))
      })
  }

  async function Save (){
    //validação
    if(!type)
    return alert("Favor informar o tipo desta tarefa!" + <br/> + "Selecione um ícone no topo...")
    else if(!title)
    return alert("Favor informar o título da tarefa")
    else if(!description)
    return alert("Favor informar a descrição da tarefa")
    else if(!date)
    return alert("Favor informar a data desta tarefa")
    else if(!hour)
    return alert("Favor informar o horário desta tarefa")

    if(match.params.id){
      await api.put(`/task/${match.params.id}`, {
        done,
        macaddress,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
      })
        .then( () => 
          setRedirect(true)
        )
    } else {
        await api.post('/task', {
          done,
          macaddress,
          type,
          title,
          description,
          when: `${date}T${hour}:00.000`
        })
          .then( () => 
           setRedirect(true)
          )
      }
    }

  async function Remove(){
    const res = window.confirm('Deseja realmente remover esta tarefa?')
    if(res==true){
      await api.delete(`/task/${match.params.id}`)
        .then(() => setRedirect(true));
    } 

  }

  useEffect(() => {
    LoadTaskDetails();
  }, [])

  //implementar clickNotification
  return (
    <S.Container>
      { redirect && <Redirect to="/" /> }

      <Header clickNotification={Notification} /> 
      
      <S.Form>
          <S.TypeIcons>
            {
                TypeIcons.map((icon, index) => (
                    index > 0 && 
                    <button type="button" onClick={() => setType(index)}>
                      <img src={icon} alt="ícone do tipo da tarefa" 
                      className={type && type != index && 'inative'} />
                    </button>
                ))
            }
          </S.TypeIcons>

          <S.Input>
            <span>Título</span>
            <input type="text" placeholder="Título da tarefa"
            onChange={e => setTitle(e.target.value)}
            value={title} />
          </S.Input>

          <S.TextArea>
            <span>Descrição</span>
            <textarea rows={5} placeholder="Detalhes da tarefa" 
            onChange={e => setDescription(e.target.value)}
            value={description} />
          </S.TextArea>

          <S.Input>
            <span>Data</span>
            <input type="date" placeholder="Data da tarefa" 
            onChange={e => setDate(e.target.value)}
            value={date} />
            <img src={iconCalendar} alt="Calendário" />
          </S.Input>

          <S.Input>
            <span>Hora</span>
            <input type="time" placeholder="Horário da tarefa" 
            onChange={e => setHour(e.target.value)}
            value={hour} />
            <img src={iconClock} alt="Relógio" />
          </S.Input>

          <S.Options>
            <div>
              <input type="checkbox" checked={done} onChange={ () => setDone(!done)} />
              <span>CONCLUÍDO</span>
            </div>
            { match.params.id && <button type="button" onClick={Remove} >EXCLUIR</button> }
          </S.Options>

          <S.Save>
            <button type="button" onClick={Save} >SALVAR</button>
          </S.Save>

      </S.Form>

      <Footer />
    </S.Container>
  )
}

export default Task;