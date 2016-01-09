MainLayout = React.createClass({
  render() {
    return <div>
      <PageHeader />
      <main>
        {this.props.content}
      </main>
      <PageFooter />
    </div>
  }
});
