import React, { Component } from 'react';

class Thead extends Component {
    render() { 
        return ( 
            <>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Tempat, tanggal lahir</th>
                        <th>Umur</th>
                        <th>Gender</th>
                        <th>Hobby</th>
                        <th>Agama</th>
                        <th>Alamat</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </>
         );
    }
}
 
export default Thead;