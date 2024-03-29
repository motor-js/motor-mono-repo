import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TableRenderer from "../components/TableRenderer";

const SwitchTable = ({ options, query }) => {
  const [option, setOption] = useState(options[0].values[0]);
  // console.log("vv", query, option);
  const segment = query.segment;
  const timeDimension = query.timeDimension;
  // console.log("segment", segment);
  return (
    <>
      <Grid item xs={3} style={{ minHeight: 300 }}>
        {options.map(({ title, values }) => (
          <List
            key={title}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                {title}
              </ListSubheader>
            }
          >
            {values.map((opt) => (
              <ListItem
                key={`${title}-${opt.name}`}
                onClick={() => setOption(opt)}
                selected={option.name === opt.name}
                button
              >
                <ListItemText primary={opt.name} />
              </ListItem>
            ))}
          </List>
        ))}
      </Grid>
      ,
      <Grid item xs={9}>
        <TableRenderer vizState={option.fn(query, segment, timeDimension)} />
      </Grid>
    </>
  );
};

export default SwitchTable;
