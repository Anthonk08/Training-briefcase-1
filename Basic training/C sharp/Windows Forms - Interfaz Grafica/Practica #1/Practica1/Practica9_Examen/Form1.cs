using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Practica9_Examen
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void lblSeguro_Click(object sender, EventArgs e)
        {

        }

        private void btnCotizar_Click(object sender, EventArgs e)
        {
            double costo = 0;
            string cotizacion = "";
            cotizacion = "Cotizacion de auto para " + txtNombre.Text + ". \r\n";

            //Obtener costo inicial
            costo = Convert.ToDouble(txtCosto.Text);

            //Verificar los seguros
            if (rbBasico.Checked) {
                costo += 500;
                cotizacion += "Eligio el seguro basico de $500 pesos \r\n";
            }
            if (rbAterceros.Checked)
            {
                costo += 1000;
                cotizacion += "Eligio el seguro a terceros de $1000 pesos \r\n";
            }
            if (rbTotal.Checked)
            {
                costo += 1500;
                cotizacion += "Eligio el seguro Total de $1500 pesos \r\n";
            }

            //Verificar los equipos
            if (chkAire.Checked) {
                costo += 400;
                cotizacion += "Con aire acondicionado de $400 pesos \r\n";
            }
            if (chkAudio.Checked)
            {
                costo += 700;
                cotizacion += "Con un sistema de audio de $700 pesos \r\n";
            }

            //Mostrar el total
            cotizacion += "El total a pagar es de: " + costo.ToString();
            txtCotizacion.Text = cotizacion;
        }

        private void btnClose_Click(object sender, EventArgs e)
        {
            Close();
        }
    }
}
