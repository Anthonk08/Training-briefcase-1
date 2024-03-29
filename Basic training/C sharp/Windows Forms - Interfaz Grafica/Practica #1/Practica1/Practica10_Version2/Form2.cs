﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace Practica10_Version2
{
    public partial class Form2 : Form
    {
        private string mensaje;
        private string contenido;

        public Form2()
        {
            InitializeComponent();
        }
        public string Mensaje {
            get { 
                return mensaje;
            }
        }

        public string Contenido { 
            get {
                return contenido;
            }
        }

        private void btnSalir_Click(object sender, EventArgs e)
        {
            mensaje = txtMensaje.Text;
            contenido = txtContenido.Text;
            this.Close();
        }

        private void btnOk_Click(object sender, EventArgs e)
        {
            mensaje = txtMensaje.Text;
            contenido = txtContenido.Text;
            this.Close();
        }

        private void btnCancel_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
