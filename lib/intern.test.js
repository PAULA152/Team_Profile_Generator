const Intern = require('.../lib/intern');
const intern = new intern('paul', '123456', 'paul@paul.com', 'UofA');

test('testing to see if we are able to get the constructor values for the "intern" object', () => {
    expect(intern.name).tobe('paul');
    expect(intern.id).tobe('123456');
    expect(intern.email).tobe('paul@paul.com');
    expect(intern.school).tobe('UofA');
});

test('testing to see if we a can get the name back from the getName() method', () => {
    expect(intern.getName()).tobe('paul');
});

test('testing to see if we can get the id back from the getName() method', () => {
    expect(intern.getId()).tobe('123456');
});

test('testing to see if we can get back the email back from the getEmail() method', () => {
    expect(intern.getEmail()).tobe('paul@paul.com');
});

test('testing to see if we can get back the school back from the getSchool() method', () => {
    expect(intern.getSchool()).tobe('UofA');
});

test('testing to see if we can get back the role from getRole() method', () => {
    expect(intern.getRole()).tobe('Intern');
});