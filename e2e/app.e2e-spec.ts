import { GithubPagesPage } from './app.po';

describe('github-pages App', () => {
  let page: GithubPagesPage;

  beforeEach(() => {
    page = new GithubPagesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
