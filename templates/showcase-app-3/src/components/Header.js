import React from 'react';
import AppBar from 'material-ui/AppBar';
import {white, red500} from 'material-ui/styles/colors';

import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import { books } from "../config/dummyData.js";
import AutoComplete from "material-ui/AutoComplete";


class Header extends React.Component {

  render() {
    const style = {
      appBar: {
        position: 'fixed',
        top: -4,
        overflow: 'hidden',
        maxHeight: 57,
        backgroundColor:red500,
        color:white,
      },
      menuButton: {
        marginLeft: 10
      },
      iconsRightContainer: {
        marginLeft: 10,
        marginTop:10,
        color:white
      }
    };

    return (
        <div>
          <AppBar
              style={style.appBar}
              title={<SearchBox />}
              iconElementRight={
                <div style={style.iconsRightContainer}>
              <ViewModule color={white} />
                </div>
              }
            />

        </div>
      );
  }
}

class SearchBox extends React.Component {

  render() {
  const styles = {
    iconButton: {
      float: 'left',
      paddingTop: 17
    },
  };
    return (
        <div>
      <IconButton style={styles.iconButton} >
        <Search color={white} />
      </IconButton>
      <AutoComplete
          fullWidth={true}
          hintText="Search..."
          dataSource={books.items.map(x => x.volumeInfo.title)}
          filter={AutoComplete.fuzzyFilter}
        />
        </div>
      );
  }
}




export default Header;
