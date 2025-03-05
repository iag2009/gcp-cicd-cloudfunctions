//-----------------------------------------------------------------------------
// NodeJS App for GCP Cloud Functions deployed via GCP Cloud Build Triggers
// Copyleft (c) by Denis Astahov
//-----------------------------------------------------------------------------

exports.helloWorld = (req, res) => {
<<<<<<< HEAD
  const message="<font color='blue'>СloudFunction of Denis Astahov!</font><br><b>App Version 1.3</b>";
||||||| parent of 7d0951d (update project)
  const message="<font color='blue'>СloudFunction of Denis Astahov!</font><br><b>App Version 1.1</b>";
=======
  const message = "<font color='blue'>СloudFunction of Aleksandr Ilves!</font><br><b>App Version 1.1</b>";
>>>>>>> 7d0951d (update project)
  res.status(200).send(message);
};
