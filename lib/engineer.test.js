const Engineer = require('.../lib/engineer');
const engineer = new engineer('paul', '123456', 'paul@paul.com', 'github.com/PAULA152');

test('testing to see if we are able to get the constructor values for the "engineer" object', () => {
    expect(engineer.name).tobe('paul');
    expect(engineer.id).tobe('123456');
    expect(engineer.email).tobe('paul@paul.com');
    expect(engineer.gitHub).tobe('github.com/PAULA152');
});

test('testing to see if we a can get the name back from the getName() method', () => {
    expect(engineer.getName()).tobe('paul');
});

test('testing to see if we can get the id back from the getName() method', () => {
    expect(engineer.getId()).tobe('123456');
});

test('testing to see if we can get back the email back from the getEmail() method', () => {
    expect(engineer.getEmail()).tobe('paul@paul.com');
});

test('testing to see if we can get back the github back from the getGitHub() method', () => {
    expect(engineer.getGitHub()).tobe('github.com/PAULA152');
});

test('testing to see if we can get back the role from getRole() method', () => {
    expect(engineer.getRole()).tobe('Engineer');
});