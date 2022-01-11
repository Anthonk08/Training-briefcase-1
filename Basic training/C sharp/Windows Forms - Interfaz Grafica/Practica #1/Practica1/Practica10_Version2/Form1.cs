using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Practica10_Version2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnClose_Click(object sender, EventArgs e)
        {
            Close();
        }

        private void btnForma2_Click(object sender, EventArgs e)
        {
            Form2 miForma2 = new Form2();
            DialogResult resultado = miForma2.ShowDialog();
            
            if (resultado == DialogResult.OK) {
                lblMensaje.Text = miForma2.Mensaje;
                lblContenido.Text = miForma2.Contenido; 
            }

            if (resultado == DialogResult.Cancel) {
                MessageBox.Show("No ejecutaste la operacion");
            }

        }
    }
}
