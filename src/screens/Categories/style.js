const style = theme => ({
  container: {
    paddingTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    border: 'none',
  }
});

export default style