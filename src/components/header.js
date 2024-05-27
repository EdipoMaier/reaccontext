import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useTarefas } from '../context/TarefasContext';
//import MenuIcon from '@mui/icons-material/Menu';
 
function Header() {
  const {quantidade} = useTarefas()
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/*  
              <MenuIcon />
              */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Gerenciamento de Projetos 2024
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Você tem {quantidade} tarefas cadastradas
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
 
export default Header;