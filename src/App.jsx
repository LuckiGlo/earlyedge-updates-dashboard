import './App.css'
import {useEffect, useState} from 'react'


function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [category, setCategory] = useState('');
  const [updates, setUpdates] = useState([]);
  const [attachment, setAttachment] = useState(null)
  const [filterCat, setFilterCat] = useState('all')
  const [search, setSearch] = useState('')
  useEffect(
    () => { const savedUpdates = localStorage.getItem('Edge-Updates')
      if (savedUpdates) {
        const loggedUpdates = JSON.parse(savedUpdates)
        setUpdates(loggedUpdates)
      }

    },
   []
  )
  function handleFileChange(event) {
    const file = event.target.files[0]
    if(!file) { setAttachment(null)
      return}
    if (file.size > 1000000) { alert('File size limit 1 MB.')
      event.target.value =''
    return}
    const reader = new FileReader()

    reader.onload = () => { setAttachment({ name: file.name, dataUrl: reader.result,})}
    reader.readAsDataURL(file)
    }
  
  function handleSubmit(event) {
    event.preventDefault()
    const newUpdate = {
      id: Date.now(),
      title,
      description,
      link,
      category,
      attachment
    }
    const newUpdates = [...updates, newUpdate]
    setUpdates(newUpdates)
    localStorage.setItem('Edge-Updates', JSON.stringify(newUpdates))


    console.log('Update Title:', title);
    console.log('Description:', description);
    console.log('Link:', link);
    console.log('Category:', category);
    setTitle('')
    setDescription('')
    setLink('')
    setCategory('')
    setAttachment(null)
        event.currentTarget 
        .reset()

    



  };
  const showUpdates = updates.filter((update) =>
    (filterCat === 'all' || update.category === filterCat) && 
   (
      update.title.toLowerCase() .includes(search.toLowerCase()) || 
      update.description.toLowerCase() .includes(search.toLowerCase()) 
    )
  )


 

  return (


    <main>
      <h1>EarlyEdge DashBoard</h1>
      <p>a simple place to share progress, research and important notes</p>
      <section><h2>Share an update</h2>
      <p>Share a quick update, link, or idea...</p>

        <form onSubmit={handleSubmit}>
          <label> Update Title <input type="text" name="title" placeholder="Type Update Here"
          value={title} onChange={(event) => setTitle(event.target.value)} required />
          </label>
          <label> Description <textarea required name="description" placeholder="Share your update here..." 
          value={description} onChange={(event) => setDescription(event.target.value)} /></label>
          <label>Attatch File <input type="file" name="Attachment" onChange={handleFileChange} /></label>
        <label> Add a link <input type="url" name="link" placeholder="Paste URL" value={link} 
        onChange={(event) => setLink(event.target.value)} />
        </label>
        <label> Category </label>
        <select required name="category" value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="" disabled>Select Category</option>
          <option value="research">Research</option>
          <option value="team">Team</option>
          <option value="marketing">Marketing</option>
          <option value="product">Product</option>
        </select>
        <button>Submit</button>
        </form>
      </section>
      <h2>Edge MVP Updates</h2>
      <select name="filter" value={filterCat} onChange={(event) => setFilterCat(event.target.value)}>
        <option value="all">All</option>
        <option value="team">Team</option>
        <option value="research">Research</option>
        <option value="marketing">Marketing</option>
        <option value="product">Product</option>
      </select>
      <input type="search" placeholder='Search Keywords' value={search} onChange={(event) => 
      setSearch(event.target.value)} />

      {showUpdates.length}
      
      <div className="updates-edge">
        {showUpdates.length === 0 && ( <p className="Keywords">No Keywords Found.</p>)}
        {showUpdates.map((update) => (
          <div className="edge-card" key={update.id}>
            <h3>{update.title}</h3>
            <p>{update.description}</p>
            <p>{update.category}</p>
            {update.link && (
            <a href={update.link} target="_blank" rel="noopener noreferrer">Open Url</a>)}
            {update.attachment && ( <a href={update.attachment.dataUrl} download={update.attachment.name}>
              Download: {update.attachment.name} 
            </a>)}
          

            



          </div>

        ))}
      
      </div>
      

    </main>
  )
}

export default App;
