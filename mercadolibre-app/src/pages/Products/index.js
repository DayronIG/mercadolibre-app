import React from 'react'

const index = () => {
    return (
        <div>
      <Breadcrumb sequence={data.categories} />
      <main className={styles.container}>
        {data.items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </main>
    </div>
    )
}

export default index
