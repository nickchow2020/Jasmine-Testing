describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("Does it handle empty string value on submitServerInfo()",()=>{
    serverNameInput.value = '';
    submitServerInfo()
    expect(serverId).toEqual(0)
  })

  it("should update server table value",()=>{
    submitServerInfo()
    updateServerTable() 

    const tbody = document.querySelectorAll("#serverTable tbody  td")
    expect(tbody[0].innerText).toEqual("Alice")
  })




  afterEach(function() {
    serverTbody.innerHTML = '';
    serverNameInput.value = "";
    allServers = { };
    serverId = 0;
  });
});