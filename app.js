app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' }); // Render the contact page
  });
  
  app.get('/services', (req, res) => {
    res.render('services', { title: 'Services' }); // Render the services page
  });
  