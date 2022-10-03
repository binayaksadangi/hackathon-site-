import React from 'react'
import style from '../styles/Search.module.css'
import { InputAdornment,TextField,IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/system';
const Searchfield = () => {
  return (
    <>
        <div className={style.search_area}>
        <Container>
          <div >
            <div className={style.field_container}>
            <TextField
             className={style.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            </div>
          
          </div>
        
        </Container>
        
        </div>
    </>
  )
}

export default Searchfield