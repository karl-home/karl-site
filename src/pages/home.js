import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import GetAppIcon from '@material-ui/icons/GetApp';
import moduleData from "../data/moduleData.json"
import peopleData from "../data/peopleData.json"
import Profile from "../components/profile"
import "../index.css"
import { Person } from '@material-ui/icons';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const rows = moduleData;
const people = peopleData;

export default function Home() {
  return (
    <div>
      <div id="top" className="flex items-center justify-center h-auto bg-cardinal shadow-lg z-10">
        <h1 className="text-2xl font-bold py-3 pl-5">Karl Website</h1>
        <div className="absolute right-0 pr-5 py-3">
          <div className="flex">
            <a href="#top">
              <p className="nav-link">
                Home
              </p>
            </a>
            <a href="#people">
              <p className="nav-link pl-5">
                People
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="center text-container">
        <p>
          Karl is a privacy-preserving framework that IoT devices can use to execute as much functionality as possible on a home cloud that runs on user-owned hardware. Rather than relying on third-party cloud services and local device state, devices (sensors) in the home cloud express their functionality in terms of small, ephemeral units of computation (similar to serverless) called modules. When functionality must be offloaded to the cloud, users define pipeline policies that justify under which conditions data can be exfiltrated. For details, see our preprint&nbsp;
          <a className="link" href="http://www.ginayuan.com/preprints/preprint-karl.pdf">
            "The IoT Home Cloud for User-Defined Pipeline Policies".
          </a>
        </p><br/>
        <p>
          More information about the modules can be found in the table below
        </p>

      </div>
      <div className="center table-container">
        <TableContainer component={Paper} elevation={2}>
          <Table stickyHeader="true">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Module ID</TableCell>
                <TableCell>Short Description</TableCell>
                <TableCell align="right">Download Static File</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row data={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="center text-container">
      <div id="people" className = "flex flex-wrap">
        {people.map((person) => (
          <Profile
            key={person.name}
            name={person.name}
            imgSrc={person.imgSrc}
            positions={person.positions}
            linkedin={person.linkedin}
            github={person.github}
            email={person.email}
          />
        ))}
        </div>
      </div>
    </div>
  );
}


function Row(props) {
  const { data } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const downloadFile = '/assets/' + data.filename

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {data.module_id}
        </TableCell>
        <TableCell>{data.short_desc}</TableCell>
        <TableCell align="right">
          <a href={downloadFile} download>
            <IconButton size="small">
              <GetAppIcon></GetAppIcon>
            </IconButton>
          </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1} marginBottom={3}>
              <Typography variant="p" gutterBottom component="div">
                {data.long_desc}
              </Typography>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Input Parameters</TableCell>
                      <TableCell>Return Type</TableCell>
                      <TableCell>Uses Network</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{data.param}</TableCell>
                      <TableCell>{data.return}</TableCell>
                      <TableCell>{data.network}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}