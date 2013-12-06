test('there are cities in data.villes', function() {
  ok(data.villes.length > 0);
});

test('there are baggers in each data.villes.baggers', function() {
  var cities = data.villes;
  for (var i in cities) {
    var city = cities[i];
    ok(city.baggers.length > 0);
  }
});

test('if there is a ref_ville, it is valid', function() {
  var matches = filter_baggers(function(bagger) {
    return bagger.ref_ville;
  });
  if (matches.length) {
    for (var i in matches) {
      var bagger = matches[i];
      var name = bagger.ref_ville;
      ok(get_city_by_name(data, name), 'ref_ville ' + name + ' is valid');
    }
  } else {
    ok('no baggers with ref_ville');
  }
});

test('invalid ref_ville should fail', function() {
  ok(!get_city_by_name(data, 'invalid'), 'no city named "invalid"');
});
