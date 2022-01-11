using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Practica8_Version2
{
    public partial class Form1 : Form
    {
        //Forma 3 de crear la instacia
        Form2 miForma2 = new Form2("Saludos");

        public Form1()
        {
            InitializeComponent();
        }

        private void btnCerrar_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void btnEnvio1_Click(object sender, EventArgs e)
        {
            //Creammos la instancia de la forma 2
            //Form2 miForma2 = new Form2(txtMensaje.Text);

            //Instancia de la forma2 del comentario
            //miForma2.Comentario = "Nos vemos!!";

            //Forma 3
            miForma2.Comentario = txtMensaje.Text;

            //Mostramos la forma modal
            //miForma2.ShowDialog();

            //Mostramos la forma no-modal
            miForma2.Show();
        }

        private void btnEnvio2_Click(object sender, EventArgs e)
        {
            //Forma 3
            miForma2.Comentario = txtMensaje.Text;

        }
    }
}
