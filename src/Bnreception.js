import React from 'react'
import './Bnreception.css'
import { FaList } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
function Bnreception() {
    const data = [
        { numeroProduit: 'souris', designation: '1', quantiteDemandee: '30', quantiteAccordee: '20', gerer: 'vide' },
        { numeroProduit: 'souris', designation: 'bic-196', quantiteDemandee: '50', quantiteAccordee: '0', gerer: '20000' },
        { numeroProduit: 'sécurité', designation: 'sécurité', quantiteDemandee: '2', quantiteAccordee: 'bic-196', gerer: '20000' },
        { numeroProduit: 'souris', designation: '1', quantiteDemandee: '30', quantiteAccordee: '20', gerer: 'vide' },
        { numeroProduit: 'souris', designation: 'bic-196', quantiteDemandee: '50', quantiteAccordee: '0', gerer: '20000' },
        { numeroProduit: 'sécurité', designation: 'sécurité', quantiteDemandee: '2', quantiteAccordee: 'bic-196', gerer: '20000' }
        // Ajoutez d'autres lignes de données ici
      ];
  return (
    <div>
       <div class="container">
        <div className='g1'>
        <div className='g11'>
        <FaList size='2rem'/>
            
   
        </div>
        <h1 className='g111'>Bon de Réception</h1>



        </div>
      
        <div class="supplier-input">

        <div className='g2'>
            <div className='g22'>
            <FaPerson size='2rem'/>
            
             </div>
             <label className='supplier' for="supplier">Veuillez saisir le nom du fournisseur:</label>
   
        </div>
        <input className='g222'list="supplier" id="sup" name="verification_responsable"  />
            <datalist id="supplier">
            <option value="f1"/>
            <option value="f2"/>
            <option value="f3"/>
            <option value="f4"/>
            </datalist>
          
           
             
          
            
            
        </div>
      
        <div class="products">

        <div className='g3'>
            <div className='g33'>

                
       <MdProductionQuantityLimits size='2rem' />
            </div>

            <h2 className='g333' >Les produits reçus :</h2>

            
        </div>

        <table id="productTable">
  <thead>
    <tr>
      <th className='first-row'>N° produit</th>
      <th className='first-row'>Désignation</th>
      <th className='first-row'>Quantité demandée</th>
      <th className='first-row'>Quantité reçue</th>
      <th className='first-row'>Quantité livrée</th>
    </tr>
  </thead>
  <tbody>
                {data.map((item, index) => (
                    <tr key={index}  className="table-row">
                        <td>{item.numeroProduit}</td>
                        <td>{item.designation}</td>
                        <td>{item.quantiteDemandee}</td>
                        <td>{item.quantiteAccordee}</td>
                        <td className='reduire' style={{ display: 'flex', gap: '5px' }}> 
                       
                        <input  className='reduireinp'  type="number" value="0" min="0"/>

                        </td>
                    </tr>
                ))}
            </tbody>
</table>




           
           
        </div>
    </div>















    </div>
  )
}

export default Bnreception
