import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const GroupFlex = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    justify-content: space-between;
    margin-top: 20px;git remote add origin git@github.com:knizamiev/styles.git
    @media (max-width: 500px) {
     flex-direction: column;
  }
`;

const InputText = styled.input`
    color :  ${props => props.color};
    &:hover {
    color: red;
    };
    @media (min-width: 500px) {
    color: green;
  }
`;

const useStyles  = makeStyles((theme) => ({
    main: {
        width: '500px',
        height: '500px',
        margin: '50px 0 0 50px',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        flexDirection: 'column'

    },
    test_two: {

    },
    button:  {
        backgroundColor: 'aqua',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        [theme.breakpoints.only('xs')]: {
            backgroundColor: '#4CAF50',
        },
        [theme.breakpoints.only('sm')]: {
            backgroundColor: 'red',
        },
        [theme.breakpoints.only('md')]: {
            backgroundColor: 'blue',
        },
    }

}));

function App(props) {
    const classes = useStyles(props);

  return (
      <div>

        <div className='test one'>
            <h1>Styled Components</h1>
            <GroupFlex>
            <span><InputText type="text" placeholder='Введите текст' color='blue'/></span>
            <span><button>Кнопка</button></span>
            </GroupFlex>
        </div>
        <div className={classes.main}>
              <h1>material-ui/styles</h1>
              <div >
                  <span><button className={classes.button}>UI Styles</button></span>
              </div>
        </div>
      </div>
  );
}

export default App;
